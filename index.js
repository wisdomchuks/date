function ageCount() {
  let now = new Date();
  let currentY = now.getFullYear();
  let currentM = now.getMonth();

  let dobget = document.getElementById("birthday").value;
  let dob = new Date(dobget);
  let prevY = dob.getFullYear();
  let prevM = dob.getMonth();

  let ageY = currentY - prevY;
  let ageM = Math.abs(currentM - prevM);

  document.getElementById('demo').innerHTML = ageY + ' years ' + ageM + ' months';
}
