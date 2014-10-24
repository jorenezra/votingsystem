//define functions and global variables here...
var siteloc = "http://localhost/votingsystem";
var scriptloc = "/scripts/";


function votePresident()
{
  $.ajax({
      url: siteloc + scriptloc + "addpresidentvote.py",
      data: {presidentName:$("#presidentName").val()},
      dataType: 'json',
	  async: true,
      success: function (res) {         
              console.log("Voting President Successful!");
			  }
    });
	$('#votepresident').prop('disabled',true);
	$('#presidentName').prop('disabled',true);
	$('#VoteTab a[href="#VicePresident"]').tab('show');
	$('#VoteTab a[href="#President"]').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});
	$('#VoteTab a[href="#VicePresident"]').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});
}

function voteVicePresident()
{
  $.ajax({
      url: siteloc + scriptloc + "addvicepresidentvote.py",
      data: {vicepresidentName:$("#vicepresidentName").val()},
      dataType: 'json',
	  async: true,
      success: function (res) {         
              console.log("Voting Vice President Successful!");
			  }
    });
	$('#votevicepresident').prop('disabled',true);
	$('#vicepresidentName').prop('disabled',true);
	$('#VoteTab a[href="#Senator"]').tab('show');
	$('#VoteTab a[href="#Senator"]').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});
}

function voteSenator()
{
  $.ajax({
      url: siteloc + scriptloc + "addsenatorvote.py",
      data: {senatorName1:$("#senatorName1").val(),
			 senatorName2:$("#senatorName2").val(),
			 senatorName3:$("#senatorName3").val(),
			 senatorName4:$("#senatorName4").val()},
      dataType: 'json',
	  async: true,
      success: function (res) {         
              console.log("Voting Senators Successful!");
			  }
    });
	$('#Success').collapse('show');
	$('#votesenator').prop('disabled',true);
	$('#senatorName1').prop('disabled',true);
	$('#senatorName2').prop('disabled',true);
	$('#senatorName3').prop('disabled',true);
	$('#senatorName4').prop('disabled',true);

}

function successvote()
{
	window.location = "http://localhost/votingsystem/";
}

function getResults() 
{
  $.ajax({
      url: siteloc + scriptloc + "viewresult.py",
      data: {position:$("#position").val()},
      dataType: 'json',
	  async: true,
      success: function (res) {    
                  console.log(res);
                  if(res[0][0] != "None")
                  {
				      table = '<div class="table-responsive">';
					  table += '<table class="table table-condensed">';
					  table += '<thead>' +
					           '<tr>' +
								 '<th>Candidate Name</th>' +
								 '<th>Votes</th>' +
							   '</tr>' +
					           '</thead>';
					  table += "<tbody>";		   
					  for (i = 0; i < res.length; i++)
					  {
						  row = res[i];
						  table += "<tr>";
						  for (j = 1; j < row.length; j++)
						  {
							  table += "<td>" + row[j] + "</td>";
						  }
						  table += "</tr>";
					  }
					  table += "</tbody>";
					  table += "</table>";
					  table += "</div>";
					  $("#target").html(table); 
				  }
              }
    });
	$('#Results').collapse('show');
}