import simplejson as json
import cgi
from dosql import *

def index(req, candidateName, candidatePosition):
	candidateName = cgi.escape(candidateName)
	candidatePosition = cgi.escape(candidatePosition)

	set = doSql()
	
	currentVotes = set.execqry("select candidateVotes from vote where candidateName = '" + candidateName + "' and candidatePosition = '" + candidatePosition + "';", False)[0][0]
	candidateVotes = int(currentVotes) + 1
	
	rec = set.execqry("select set_vote('" + candidateName + "', '" + candidatePosition + "', '" + str(candidateVotes) + "');", True)
	result = []
	for a in rec:
		stringed = map(str, a)
		result.append(stringed)

	return json.dumps(result)

