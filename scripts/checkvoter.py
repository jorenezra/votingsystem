from dosql import *
import cgi
import simplejson as json

def index(req, votersName):
	votersName = cgi.escape(votersName)

	x = doSql()
	rets = x.execqry("select not exists(select votersName from voters where votersName = '" + votersName + "');", False)[0][0]
	
	return json.dumps(rets)



		