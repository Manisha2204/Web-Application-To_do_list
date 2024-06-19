let contador = 0;
let select_opt = 0;

function add_to_list() {
    const action = document.querySelector('#action_select').value;
    const description = document.querySelector('.input_description').value;
    const title = document.querySelector('.input_title_desc').value;
    const date = document.getElementById('date_select').value;

    switch (action) {
        case "SHOPPING":
            select_opt = 0;
            break;
        case "WORK":
            select_opt = 1;
            break;
        case "SPORT":
            select_opt = 2;
            break;
        case "MUSIC":
            select_opt = 3;
            break;
    }

    const class_li = ['list_shopping list_dsp_none', 'list_work list_dsp_none', 'list_sport list_dsp_none', 'list_music list_dsp_none'];

    const cont = `
        <div class="col_md_1_list"><p>${action}</p></div>
        <div class="col_md_2_list"><h4>${title}</h4><p>${description}</p></div>
        <div class="col_md_3_list">
            <div class="cont_text_date"><p>${date}</p></div>
            <div class="cont_btns_options">
                <ul>
                    <li><a href="#finish" onclick="finish_action(${select_opt}, ${contador});"><i class="material-icons">&#xE5CA;</i></a></li>
