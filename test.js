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
    var button_value = $(data).text();
    var edit_row=$(data).parent().parent().children("td:nth-child(1), td:nth-child(2), td:nth-child(3), td:nth-child(4)");
    if (button_value == "Edit") {
        edit_row.attr("contenteditable", true);
        $(data).text("Stop Edit");
    }
    else {
        edit_row.attr("contenteditable", false);
        $(data).text("Edit");
    }
}