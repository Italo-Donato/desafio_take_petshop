exports.get = (req,res,next) =>{
    //retorna os proximos horarios disponíveis
    const a = [];
    a.push(newDate(a));
    a.push(newDate(a));
    a.push(newDate(a));//retorna as tres datas disponiveis mais proximas
    res.status(200).send(a);
}

exports.post = (req,res,next) =>{
    const a = new agendaService();
    const data = new Data();
    const date = [parseInt(req.query.day), parseInt(req.query.month), req.query.time];

    if(belong(date,agenda, data.equals)){   //coloca na agenda caso não exista na agenda
        a.set(date);
        res.status(200).send({"acepted": true});
    }
    res.status(200).send({"acepted": false});
}

exports.delete = (req,res,next) =>{
    //tira da agenda um dos horarios
    res.status(200).send({"testando": true});
}

const d = new Date();
class Data{
    //dia mes horario
    horarios = ["M","T"];
    getDay(){
        return [d.getDate(), d.getMonth(), "M"];//data inicial a partir do dia atual
    }
    getNextDay(day){
        const newDay = day;
        if(day[2].toUpperCase() == "M"){//turno da tarde para manha
            newDay[2] = "T";
        }
        else if(day[1] < 30){           //passa o dia
            newDay[2] = "M";
            newDay[1] = newDay[1]+1;
        }
        else if(day[0] < 12){           //passa o mes
            newDay[2] = "M";
            newDay[1] = 1;
            newDay[0] = newDay[0]+1
        }
        else{                           //overflow
            newDay[2] = "M";
            newDay[1] = 1;
            newDay[0] = 1;
        }
        return newDay;
    }
    equals(dataA, dataB){
        return dataA[0] === dataB[0] && dataA[1] === dataB[1] && dataA[2] === dataB[2];
    }
}

class agendaService{
    data = new Data();
    get(){
        return agenda;
    }
    set(date){
        agenda.push(date);
    }
    compare(date){//busca se a data existe na agenda
        return agenda.findIndex((atual)=>this.data.equals(atual, date)) !== -1;
    }
}

function belong(item, list, compareFun){//função generica para pesquisar em um array
    return list.findIndex((atual)=>compareFun(atual,item)) !== -1;
}

const agenda = [];

function newDate(list){
    let novaData;
    const date = new Data();
    const a = new agendaService();
    novaData = date.getDay();
    while(a.compare(novaData) || belong(novaData,list, date.equals)){//roda enquanto a data bater com a agenda ou as disponiveis selecionadas
        novaData = date.getNextDay(novaData);//resliza a troca para proxima data livre
    }
    return novaData;
}