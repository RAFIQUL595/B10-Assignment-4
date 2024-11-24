
function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0) {
    return "Invalid Input";
  }
  const monthlyIncome = income - expenses;
  const totalIncome = monthlyIncome * 0.2;
  return totalIncome;
}


function sendNotification(email) {
  if (email.indexOf("@") < false) {
    return "Invalid Email";
  }
  const divideEmail = email.split("@");
  const userName = divideEmail[0];
  const domainName = divideEmail[1];
  const emailMessage =
    userName + " " + "sent you an email from" + " " + domainName;
  return emailMessage;
}


function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  const numberCheck = name.split("");

  for (let i = 0; i < numberCheck.length; i++) {
    if (!isNaN(numberCheck[i])) {
      return true;
    }
  }
  return false;
}


function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  let finelScore = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily) {
    finelScore = finelScore + finelScore * 0.2;
  }

  if (finelScore >= 80) {
    return true;
  } else {
    return false;
  }
}


function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let totalTimes = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    totalTimes = totalTimes + waitingTimes[i];
  }
  const averageTime = totalTimes / waitingTimes.length;
  const timeRemaining = Math.round(averageTime);
  const remainingPeople = serialNumber - 1 - waitingTimes.length;
  const isratSerial = remainingPeople * timeRemaining;
  return isratSerial;
}
