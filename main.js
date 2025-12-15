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
  console.log(`year Input Value: ${yearInputValue}`);

  const now = new Date();

  //years calculation

  const currentYear = now.getFullYear();
  console.log(`current year: ${currentYear}`);

  const usersYear = currentYear - yearInputValue;
  console.log(`users age in years: ${usersYear}`);

  yearsValueElement.textContent = usersYear;

  //months calculation

  const currentMonth = now.getMonth();
  console.log(`current month: ${currentMonth}`);

  const usersMonth = currentMonth - monthInputValue;
  console.log(`users month: ${usersMonth}`);

  monthsValueElement.textContent = usersMonth;

  //days calculation

  const currentDay = now.getDay();
  console.log(`current day: ${currentDay}`);

  const usersDay = currentDay - dayInputValue;
  console.log(`users month: ${usersMonth}`);

  daysValueElement.textContent = usersDay;
});
