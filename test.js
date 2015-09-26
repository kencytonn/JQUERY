$(document).ready(function () {
        $(document).on('click', 'button.deletebutton', function () {

            $(this).closest('tr').remove();
            return false;

        });
        $('.addbtn').click(function () {
            $(".test_table").append('<tr><td>3</td><td>Charity</td><td>Zablon</td><td>CharityZablon@mail.com</td><td><button class="editbtn btn btn-info" onclick="rowEdit(this)">Edit</button><button class=" deletebutton btn btn-danger">Delete</button></td> </tr>');
        });



});
function rowEdit(data) {
    $(data).parent().parent().attr("contenteditable", true);

}