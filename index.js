
const app = {
    cars : [],
    add(car){
        this.cars.push(car)
    },
    edit(index, car){
        this.cars[index]=car
    }
    ,
    deleted(index){
        this.cars.splice(index, 1)
    }
    
}
app.add({
    name: 'khuong',
    age: 26
}
)
app.add(
    
{
    name:'khanh',
    age:25
}
)
    console.log(app.cars)