import simplejson as json
import cgi
from dosql import *

def index(req, senatorName1, senatorName2, senatorName3, senatorName4):
	senatorName1 = cgi.escape(senatorName1)
	senatorName2 = cgi.escape(senatorName2)
	senatorName3 = cgi.escape(senatorName3)
	senatorName4 = cgi.escape(senatorName4)
	

	set = doSql()
	
	currentVotes1 = set.execqry("select senatorVotes from senator where senatorName = '" + senatorName1 + "';", False)[0][0]
	senatorVotes1 = int(currentVotes1) + 1
	
	currentVotes2 = set.execqry("select senatorVotes from senator where senatorName = '" + senatorName2 + "';", False)[0][0]
	senatorVotes2 = int(currentVotes2) + 1
	
	currentVotes3 = set.execqry("select senatorVotes from senator where senatorName = '" + senatorName3 + "';", False)[0][0]
	senatorVotes3 = int(currentVotes3) + 1
	
	currentVotes4 = set.execqry("select senatorVotes from senator where senatorName = '" + senatorName4 + "';", False)[0][0]
	senatorVotes4 = int(currentVotes4) + 1
	
	rec = set.execqry("select set_senatorvotes('" + senatorName1 + "', '" + str(senatorVotes1) + "', '" + senatorName2 + "', '" + str(senatorVotes2) + "', '" + senatorName3 + "', '" + str(senatorVotes3) + "', '" + senatorName4 + "', '" + str(senatorVotes4) + "');", True)
	result = []
	for a in rec:
		stringed = map(str, a)
		result.append(stringed)

	return json.dumps(result)

