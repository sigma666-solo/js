$('#toggleInfoBtn').on('click', function() {
    $('.info-block').toggle();
});

$('#toggleCardBtn').on('click', function() {
    $('.student-card').toggleClass('active');
});

$('#toggleExtraBtn').on('click', function() {
    $('.extra-info').slideToggle();
});

$('#searchInput').on('input', function() {
    let value = $(this).val();
    let result = value === '' ? 'Введите имя' : 'Поиск: ' + value;
    $('.search-result').text(result);
});

$('#toggleListBtn').on('click', function() {
    $('#studentListContainer').slideToggle();
});

$('#studentForm').on('submit', function(e) {
    e.preventDefault();

    let name = $('#studentName').val();
    let age = $('#studentAge').val();
    let grade = $('#studentGrade').val();

    let studentElement = $('<div class="student-item"></div>');

    let infoDiv = $('<div class="student-info"></div>');
    infoDiv.html('<strong>' + name + '</strong><br>' +
                 'Возраст: ' + age + '<br>' +
                 'Средний балл: ' + grade);

    studentElement.append(infoDiv);

    let deleteBtn = $('<button class="delete-btn">Удалить</button>');
    deleteBtn.on('click', function() {
        $(this).closest('.student-item').fadeOut(function() {
            $(this).remove();
        });
    });

    let editBtn = $('<button class="edit-btn">Изменить</button>');
    editBtn.on('click', function() {
        let item = $(this).closest('.student-item');

        if(item.hasClass('editing')) {
            let nameText = $('#editName').val();
            let ageText = $('#editAge').val();
            let gradeText = $('#editGrade').val();

            infoDiv.html('<strong>' + nameText + '</strong><br>' +
                         'Возраст: ' + ageText + '<br>' +
                         'Средний балл: ' + gradeText);

            item.removeClass('editing');
            editBtn.text('Изменить');
            item.removeClass('edited');
        } else {
            item.addClass('editing');
            editBtn.text('Сохранить');

            infoDiv.html('<input type="text" id="editName" value="' + name + '">' +
                         '<input type="number" id="editAge" value="' + age + '">' +
                         '<input type="number" id="editGrade" step="0.1" value="' + grade + '">');

            item.addClass('edited');
        }
    });

    studentElement.append(editBtn);
    studentElement.append(deleteBtn);

    $('#studentListContainer').append(studentElement);

    $('#studentForm')[0].reset();
});
