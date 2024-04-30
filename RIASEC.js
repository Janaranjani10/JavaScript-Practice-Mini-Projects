var r=0,i=0,a=0,s=0,e=0,c=0;

var jobs = [
    {
        type: 'r',
        title: 'Realistic Jobs',
        careers: [
            'Agriculture career path',
            'Health Assisant career path',
            'Computers career path',
            'Construction career path',
            'Mechnanic career path',
            'Engineering career path',
            'Food career path'
        ]
    },
    {
        type: 'i',
        title: 'Investigative Jobs',
        careers: [
            'Marine Biology career path',
            'Engineering career path',
            'Chemistry career path',
            'Zoology career path',
            'Medicine career path',
            'Economics career path',
            'Phychology career path'
        ]
    },
    {
        type: 'a',
        title: 'Artistic Jobs',
        careers: [
            'Communications career path',
            'Cosmetology career path',
            'Fine and Performing Arts career path',
            'Photography career path',
            'Radio and TV career path',
            'Interior Design career path',
            'Architecture career path'
        ]
    },
    {
        type: 's',
        title: 'Social Jobs',
        careers: [
            'Counseling career path',
            'Nursing career path',
            'Physical Therapy career path',
            'Travel career path',
            'Advertising career path',
            'Public Relations career path',
            'Education career path'
        ]
    },
    {
        type: 'e',
        title: 'Enterprising Jobs',
        careers: [
            'Fashion Merchandising career path',
            'Real Estate career path',
            'Marketing/Sales career path',
            'Law career path',
            'Political Science career path',
            'International Trade career path',
            'Banking/Finance career path'
        ]
    },
    {
        type: 'c',
        title: 'Conventional Jobs',
        careers: [
            'Accounting career path',
            'Court Reporting career path',
            'Insurance career path',
            'Administration career path',
            'Medical Records career path',
            'Banking career path',
            'Data Processing career path'
        ]
    }
];

function fun(event) {
    if (event.target.value === 'R') {
        r+=1;
    } else if (event.target.value === 'I') {
        i+=1;
    } else if (event.target.value === 'A') {
        a+=1;
    } else if (event.target.value === 'S') {
        s+=1;
    } else if (event.target.value === 'E') {
        e+=1;
    } else if (event.target.value === 'C') {
        c+=1;
    }
}

function submit() {
    console.log("Submit button clicked"); // Check if the function is called
    let divmain = document.getElementById('main');
    document.getElementById('ques').style.display = 'none';

    let arr = ['r', 'i', 'a', 's', 'e', 'c'];
    let arr_val = [r, i, a, s, e, c];

    let maxIndices = [];
    let maxVal = Math.max(...arr_val);
    for (let i = 0; i < arr_val.length; i++) {
        if (arr_val[i] === maxVal) {
            maxIndices.push(i);
        }
    }

    let div = document.createElement('div');
    div.id = 'secondmain';
    let temp = document.createElement('h1');
    temp.textContent = 'Jobs Suggested';
    div.append(temp);

    maxIndices.forEach(index => {
        let jobType = jobs[index];
        let head = document.createElement('h2');
        head.textContent = jobType.title;
        head.style.color = 'blue';
        head.style.margin = '10px';
        div.appendChild(head);

        jobType.careers.forEach(career => {
            let listItem = document.createElement('li');
            listItem.innerHTML = career;
            div.appendChild(listItem);
        });
    });

    div.style.display = 'block';
    div.style.padding = '10px';
    div.style.backgroundColor = '#FFF';
    divmain.appendChild(div);
}
