const formElement = document.querySelector("form");
const yearsValueElement = document.querySelector("#years");
const daysValueElement = document.querySelector("#days");
const monthsValueElement = document.querySelector("#months");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formElement);
  const yearInputValue = formData.get("year");
  const monthInputValue = formData.get("month");
  const dayInputValue = formData.get("day");
  //   console.log(`year Input Value: ${yearInputValue}`);

  const userBirthDate = new Date(
    yearInputValue,
    monthInputValue,
    dayInputValue
  );
  const now = new Date();

  let ageInYears = now.getFullYear() - userBirthDate.getFullYear();
  let ageInMonths = now.getMonth() - userBirthDate.getMonth();
  let ageInDays = now.getDate() - userBirthDate.getDate();

  if (ageInDays < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    ageInDays += prevMonth.getDate();
  }
  if (ageInMonths < 0) {
    ageInYears--;
    ageInMonths += 12;
  }
  yearsValueElement.textContent = ageInYears;
  monthsValueElement.textContent = ageInMonths;
  daysValueElement.textContent = ageInDays;

  //   //old calculation method
  //   const now = new Date();
  //   const usercurrentDate = new Date(
  //     yearInputValue,
  //     monthInputValue - 1,
  //     dayInputValue
  //   );
  //   console.log(`current date: ${now}`);
  //   console.log(`user date: ${usercurrentDate}`);

  //   //years calculation

  //   const currentYear = now.getFullYear();
  //   console.log(`current year: ${currentYear}`);

  //   const usersYear = currentYear - yearInputValue;
  //   console.log(`users age in years: ${usersYear}`);

  //   yearsValueElement.textContent = usersYear;

  //   //months calculation

  //   const currentMonth = now.getMonth();
  //   console.log(`current month: ${currentMonth}`);

  //   const usersMonth = currentMonth - monthInputValue;
  //   console.log(`users month: ${usersMonth}`);

  //   monthsValueElement.textContent = usersMonth;

  //   //days calculation

  //   const currentDay = now.getDay();
  //   console.log(`current day: ${currentDay}`);

  //   const usersDay = currentDay - dayInputValue;
  //   console.log(`users month: ${usersMonth}`);

  //   daysValueElement.textContent = usersDay;
});
