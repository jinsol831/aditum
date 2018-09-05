//Include libraries
#include <SPI.h>
#include <MFRC522.h>
#include <Ethernet.h>

//Predefine pin's for digital IO
#define RST_PIN         7          // Configurable, see typical pin layout above
#define SS_PIN          6         // Configurable, see typical pin layout above

MFRC522 mfrc522(SS_PIN, RST_PIN);  // Create MFRC522 instance

void setup() {
  Serial.begin(9600); // Initialize serial communications with the PC
  SPI.begin();
  
  // disable Ethernet
  pinMode(10,OUTPUT);
  digitalWrite(10,HIGH);

  // disable SD
  pinMode(4,OUTPUT);
  digitalWrite(4,HIGH);

  Serial.println("1100"); //Create Plug&Play init var
  
  mfrc522.PCD_Init();
  //mfrc522.PCD_DumpVersionToSerial();  // Show details of PCD - MFRC522 Card Reader details
  //Serial.println(F("Scan PICC to see UID, SAK, type, and data blocks..."));
}

void loop() {
 // Look for new cards
 if ( ! mfrc522.PICC_IsNewCardPresent()) {
 return;
 }

 // Select one of the cards
 if ( ! mfrc522.PICC_ReadCardSerial()) {
 return;
 }
 
  int UID = getUID();
  //Serial.print("UID: ");
  Serial.println(UID);
  
 // Dump debug info about the card; PICC_HaltA() is automatically called
 //mfrc522.PICC_DumpToSerial(&(mfrc522.uid));
}

int getUID() {
  unsigned int hex_num;
  hex_num =  mfrc522.uid.uidByte[0] << 24;
  hex_num += mfrc522.uid.uidByte[1] << 16;
  hex_num += mfrc522.uid.uidByte[2] <<  8;
  hex_num += mfrc522.uid.uidByte[3];
  return hex_num;
}

