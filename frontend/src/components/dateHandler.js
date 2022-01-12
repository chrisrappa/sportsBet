export default function dateHandler(props) {

  var date = props;
  const parseDate = (input) => {
    var parts = input.match(/(\d+)/g);
    const newDate = new Date(parts[0], parts[1]-1, parts[2]); 
    return newDate;
  }
  
  var calculateTimeSinceLast = ((parseDate(date).getTime() - Date.now()) * - 1);
  var daysSince = (calculateTimeSinceLast / (60*60*24*1000));

  return daysSince;
}
