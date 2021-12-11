var array = [
    {
        id: '0',
        name: 'John',
        country: 'United States'
    },
    {
        id: '1',
        name: 'Mackay',
        country: 'United Kindom',
    },
    {
        id: '2',
        name: 'zip',
        country:'Bangla'
    }
];


const findVal = (req, res) => {
console.log(req.query.id);
 try{
     res.send(array[req.query.id]);
    }
catch(err){
         console.log(err);
    }
}

const add = (req, res) => {
    console.log(req.body);
    try {
        const data = eval(req.body);
        array.push(data);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        res.send(array);
    }
}

module.exports = {
    findVal,
    add,
};