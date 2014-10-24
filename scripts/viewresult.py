import simplejson as json
import cgi
from dosql import *

def index(req, position):
	position = cgi.escape(position)

	set = doSql()
	
	if position == 'president':  
		order = 'presidentVotes'
	elif position == 'vicepresident':
		order = 'vicepresidentVotes'
	elif position == 'senator':
		order = 'senatorVotes'
		
	rec = set.execqry("select * from " + position + " order by " + order + " desc;", True)
	result = []
	for a in rec:
		stringed = map(str, a)
		result.append(stringed)

	return json.dumps(result)

