let countryCode = "US";

switch (countryCode) {
  case "FR":
    console.log("https://fr.yahoo.com/");
    break;
  case "DE":
    console.log("https://de.yahoo.com/");
    break;
  case "UK":
    console.log("https://uk.yahoo.com/");
    break;
  case "US":
    console.log("https://us.yahoo.com/");
    break;
  case undefined:
    console.log("https://us.yahoo.com/");
    break;
  case "":
    console.log("https://us.yahoo.com/");
  default:
    console.log("https://us.yahoo.com/");
    break;
}
