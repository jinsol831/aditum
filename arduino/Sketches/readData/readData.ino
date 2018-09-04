void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  if (Serial.available() > 0) {
    Serial.println("Port is ready for the using...");
    char input = Serial.read();
    if (input == 'H') {
     digitalWrite(13, HIGH); 
    }
    if (input == 'L') {
     digitalWrite(13, LOW); 
    }
  }
}
