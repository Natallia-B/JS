
let criteria_list = [{name:"Improved data management","value":4998,"rate":22,"performance_score":6.6,"percentile_importance":100},{"name":"Better integration with existing systems","value":5008,"rate":16,"performance_score":4.6,"percentile_importance":73},{"name":"Improved operational efficiency","value":4995,"rate":15,"performance_score":6.7,"percentile_importance":68},{"name":"Improved concern resolution","value":5002,"rate":14,"performance_score":7.8,"percentile_importance":64},{"name":"Higher operational cost savings","value":4954,"rate":7,"performance_score":7,"percentile_importance":32},{"name":"Improved decision-making","value":5006,"rate":7,"performance_score":6.6,"percentile_importance":32},{"name":"Improved dispatcher performance","value":5009,"rate":5,"performance_score":7.3,"percentile_importance":23},{"name":"Better reporting capabilities","value":5014,"rate":4,"performance_score":5.5,"percentile_importance":18},{"name":"Improved training and deployment","value":5001,"rate":3,"performance_score":8,"percentile_importance":14},{"name":"Lower IT costs","value":5007,"rate":3,"performance_score":6,"percentile_importance":14},{"name":"More efficient crew planning","value":4956,"rate":3,"performance_score":6,"percentile_importance":14},{"name":"More on-time flights","value":5005,"rate":3,"performance_score":7.5,"percentile_importance":14},{"name":"Improved cockpit workflow","value":4996,"rate":2,"performance_score":9,"percentile_importance":9},{"name":"Improved fuel saving awareness","value":5011,"rate":2,"performance_score":7,"percentile_importance":9},{"name":"Improved pilot fuel awareness","value":5012,"rate":1,"performance_score":6.5,"percentile_importance":5},{"name":"Improved pilot satisfaction","value":4999,"rate":1,"performance_score":9,"percentile_importance":5},{"name":"Reduced cockpit costs","value":5000,"rate":1,"performance_score":5,"percentile_importance":5},{"name":"Better fatigue risk management","value":4961,"rate":0,"performance_score":5,"percentile_importance":0},{"name":"Higher crew satisfaction","value":4957,"rate":0,"performance_score":4,"percentile_importance":0},{"name":"Improved geographic awareness","value":4997,"rate":0,"performance_score":888,"percentile_importance":0},{"name":"Increased fuel efficiency","value":5004,"rate":0,"performance_score":8,"percentile_importance":0},{"name":"Increased staff confidence","value":5010,"rate":0,"performance_score":7,"percentile_importance":0},{"name":"More crew customization","value":5013,"rate":0,"performance_score":null,"percentile_importance":0},{"name":"Paperless transition support","value":5003,"rate":0,"performance_score":8,"percentile_importance":0}];


let GuessTypeOf = (arr) => {
    arr.forEach((elem) => {
        for (let el in elem) {

        if (typeof(elem[el]) === 'string') {
            // console.log(typeof(elem[el]));

            console.log(`This is a string: ${el} : ${elem[el]}`)
        }

        else {

            console.log(`This is a number: ${el} : ${elem[el]}`)
        }

        }
    });

}




GuessTypeOf(criteria_list);