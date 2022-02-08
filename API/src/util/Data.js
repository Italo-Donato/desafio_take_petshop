const d = new Date();

class Data{
    //dia mes horario
    horarios = ["M","T"];
    getDay(){
        return [d.getDate(), d.getMonth(), "M"];
    }
    getNextDay(day){
        const newDay = day;
        if(day[2].toUpperCase() == "M"){
            newDay[2] = "T";
        }
        else if(day[1] < 30){
            newDay[2] = "M";
            newDay[1] = newDay[1]+1;
        }
        else if(day[0] < 12){
            newDay[2] = "M";
            newDay[1] = 1;
            newDay[0] = newDay[0]+1
        }
        else{
            newDay[2] = "M";
            newDay[1] = 1;
            newDay[0] = 1;
        }
        return newDay;
    }

}

export default Data;