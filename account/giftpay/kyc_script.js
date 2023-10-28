

document.getElementById('id_front_file').onchange = function () {
    document.getElementById('id_front_label').innerHTML = this.files[0].name;
};

document.getElementById('id_back_file').onchange = function () {
    document.getElementById('id_back_label').innerHTML = this.files[0].name;
};

function submit_file(){
    document.getElementById("kyc_form").submit();
}
function submit_file_gift(){
    document.getElementById("giftcard_form").submit();
}
