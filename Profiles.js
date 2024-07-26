/*This Javascript file is for the Profile webpage */
function showMemberInfo(memberName) {
    var memberInfoTable = document.getElementById('memberInfoBody');
    memberInfoTable.innerHTML = ''; // Clear previous content

    // Add member info to the table
    var memberInfo = {
        'Nayeon': {
            'image': 'Images/Nayeon_eyes_wide_open.jpg',
            'name': 'Im Na Yeon',
            'info': 'Meet Nayeon! Nayeon is 28 years old. Her nationality is South Korean. She debuted as a solo artist in June 2022.'
        },
        'Jeongyeon': {
            'image': 'Images/Eyes_wide_open_Jeongyeon_profile.webp',
            'name': 'Yoo Jeong Yeon',
            'info': 'Meet Jeongyeon! Jeongyeon is 27 years old. Her nationality is South Korean. She is one of the Lead volcalist in TWICE.'
        },
        'Momo': {
            'image': 'Images/Eyes_wide_open_Momo_profile.webp',
            'name': 'Hirai Momo',
            'info': 'Meet Momo! Momo is 27 years old. Her nationality is Japanese and she was born in Kyoto, Japan.'
        },
        'Jihyo': {
            'image': 'Images/Eyes_wide_open_Jihyo_profile.webp',
            'name': ' Park Ji hyo',
            'info': 'Meet Jihyo! Jihyo is 26 years old. Her nationality is South Korean. She is regonized as the leader of TWICE.'
        },
        'Sana': {
            'image': 'Images/Eyes_wide_open_Sana_profile.webp',
            'name': 'Minatozaki Sana',
            'info': 'Meet Sana! Sana is 26 years old. Her nationality is Japanese and she was born in Osaka, Japan.'
        },
        'Mina': {
            'image': 'Images/Eyes_wide_open_Mina_profile.webp',
            'name': 'Myoui Mina',
            'info': 'Meet Mina! Mina is 26 years old. Her current nationality is Japanese and she was born in Texas, USA. '
        },
        'Tzuyu': {
            'image': 'Images/Eyes_wide_open_Tzuyu_profile.webp',
            'name': ' Chou Tzuyu',
            'info': 'Meet Tzuyu! Tzuyu is 24 years old. Her nationality is Taiwanese and was born in Tanin, Taiwan. '
        },
        'Dahyun': {
            'image': 'Images/Eyes_wide_open_Dahyun_profile.webp',
            'name': 'Kim Da Hyun',
            'info': 'Meet Dahyun! Dahyun is 25 years old. Her nationality is South Korean. '
        },
        'Chaeyoung': {
            'image': 'Images/Eyes_wide_open_Chaeyoung_profile.webp',
            'name': ' Son Chae Young',
            'info': 'Meet Chaeyoung! Chaeyoung is 24 years old. Her nationality is South Korean. Chaeyoung is one of the main rappers in TWICE.'
        }
        // Add more members as needed
    };

    if (memberName in memberInfo) {
        var member = memberInfo[memberName];

        // Create a table row with member information
        var row = memberInfoTable.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = '<img src="' + member.image + '" alt="' + member.name + '" style="max-width: 100px;">';
        cell2.textContent = member.name;
        cell3.textContent = member.info;
    }
}