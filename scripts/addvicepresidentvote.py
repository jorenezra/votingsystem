import simplejson as json
import cgi
from dosql import *

def index(req, vicepresidentName):
	vicepresidentName = cgi.escape(vicepresidentName)

	set = doSql()
	
	currentVotes = set.execqry("select vicepresidentVotes from vicepresident where vicepresidentName = '" + vicepresidentName + "';", False)[0][0]
	vicepresidentVotes = int(currentVotes) + 1
	
	rec = set.execqry("select set_vicepresidentvote('" + vicepresidentName + "', '" + str(vicepresidentVotes) + "');", True)
	result = []
	for a in rec:
		stringed = map(str, a)
		result.append(stringed)

	return json.dumps(result)

