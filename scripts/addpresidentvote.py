import simplejson as json
import cgi
from dosql import *

def index(req, presidentName):
	presidentName = cgi.escape(presidentName)

	set = doSql()
	
	currentVotes = set.execqry("select presidentVotes from president where presidentName = '" + presidentName + "';", False)[0][0]
	presidentVotes = int(currentVotes) + 1
	
	rec = set.execqry("select set_presidentvote('" + presidentName + "', '" + str(presidentVotes) + "');", True)
	result = []
	for a in rec:
		stringed = map(str, a)
		result.append(stringed)

	return json.dumps(result)

