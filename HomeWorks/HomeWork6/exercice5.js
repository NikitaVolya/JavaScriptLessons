
let workarea, submitButton, studentsField, topicField;

function createGroup(name, students) {
    return  {
        name: name,
        students: students
    }
}

let reports = [];

function addReport(group, lesson, topic) {
    reports.push({
        group: group,
        lesson: lesson, 
        topic: topic,
        values: [],
        isOver: false,
        setPresents(values) {
            console.log(this);
            if (values.length != group.students.length)
                return;
            this.values = values,
            this.isOver = true;
        }
    })
}

function getReport(group, lesson) {
    for (let i in reports)
    {
        let report = reports[i];
        if (report.group.name == group.name && report.lesson == lesson)
        {
            return report;
        }
    }
    addReport(group, lesson, '');
    return reports[reports.length - 1];
}

let lessons = 4;
let groups = [
    createGroup('Group 1', ["student 1", "student 2", "student 3"]),
    createGroup('Group 2', ["student 4", "student 5", "student 6"]),
    createGroup('Group 3', ["student 7", "student 8", "student 9"]),
]


function clearWorkArea() {
    submitButton.style.display = 'none';
    studentsField.innerHTML = ''
}

function renderWorkArea(report) {
    workarea.style.display = 'block';
    studentsField.innerHTML = '';

    submitButton.style.display = report.isOver ? 'none' : 'block';
    topicField.value = report.topic;

    for (let i in report.group.students)
    {
        let student = report.group.students[i];
        if (!report.isOver) {
            studentsField.innerHTML += 
                `<div class="row student-row">
                    <div class="w50">
                        <p>${student}</p>
                    </div>
                    <div class="w50">
                        <input type="checkbox" name="present">
                    </div>
                </div>`;
        }
        else {
            studentsField.innerHTML += 
                `<div class="row student-row">
                    <div class="w50">
                        <p>${student}</p>
                    </div>
                    <div class="w50">
                        <p>${report.values[i] ? 'present' : ''}</p>
                    </div>
                </div>`;
        }
    }

}

function loadLessons() {
    const lesson = document.getElementById('lesson');
    lesson.innerHTML = '';
    for (let i = 0; i < lessons; i++)
    {
        lesson.innerHTML += `<option value="${i}">${i + 1}</option>`;
    }
}

function loadGroups() {
    const group = document.getElementById('group');
    group.innerHTML = '';
    for (let i = 0; i < groups.length; i++)
    {
        group.innerHTML += `<option value="${i}">${groups[i].name}</option>`;
    }
}


document.addEventListener('DOMContentLoaded', () => {

    workarea = document.getElementById('workarea');
    submitButton = document.getElementById('submitBtn');
    studentsField = document.getElementById('students');
    topicField = document.getElementById('topic');

    clearWorkArea();
    loadLessons();
    loadGroups();
    workarea.style.display = 'none';

    const form = document.getElementById('presentForm');
    const selectBtn = document.getElementById('selectBtn');

    selectBtn.addEventListener('click', () => {
        const lessonField = document.getElementById('lesson');
        const groupField = document.getElementById('group');
        console.log(lessonField.value, groupField.value);

        let present = getReport(groups[groupField.value], lessonField.value);
        renderWorkArea(present);
    })

    form.addEventListener('submit', e => {
        e.preventDefault();

        let data = new FormData(form);
        console.log(data);
        let group = groups[data.get('group')];
        let report = getReport(group, data.get('lesson'));
        report.topic = data.get('topic');
        rep = []
        document.getElementsByName('present').forEach(e => rep.push(e.checked));
        report.setPresents(rep);
        renderWorkArea(report);
    });
});