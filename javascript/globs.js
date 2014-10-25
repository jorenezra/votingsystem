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
				  var rank1name = res[0][1];
                  var rank1vote = res[0][2];
				  var rank2name = res[1][1];
                  var rank2vote = res[1][2];
				  var rank3name = res[2][1];
                  var rank3vote = res[2][2];
				  var rank4name = res[3][1];
                  var rank4vote = res[3][2];

                  $("#rank1").html(rank1name);
                  $("#vote1").html(rank1vote);
				  $("#rank2").html(rank2name);
                  $("#vote2").html(rank2vote);
				  $("#rank3").html(rank3name);
                  $("#vote3").html(rank3vote);
				  $("#rank4").html(rank4name);
                  $("#vote4").html(rank4vote);
              }
    });
	$('#Results').collapse('show');
}

function getResultstable() 
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
	$('#Resultstable').collapse('show');
}

function successview()
{
	window.location = "http://localhost/votingsystem/";
}