from dosql import *
import cgi
import simplejson as json

def index(req, votersName):
	votersName = cgi.escape(votersName)
	
	x = doSql()
	rec = x.execqry("select * from set_voter('" + votersName + "');", True)[0][0]
	result = []
	for a in rec:
		stringed = map(str, a)
		result.append(stringed)

	return json.dumps(result)