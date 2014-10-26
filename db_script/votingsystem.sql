--start of President table
create table president (
	presidentID serial primary key,
	presidentName text,
	presidentVotes int
);

create or replace
    function set_president(p_presidentName text, p_presidentVotes int) 
    returns text as
$$
    begin
      insert into president(presidentName, presidentVotes) values
        (p_presidentName, p_presidentVotes);
    return 'OK';
    end;
$$
  language  'plpgsql';

create or replace 
    function set_presidentvote(p_presidentName text, p_presidentVotes int)
    returns text as
$$
  begin
      update president
	  set presidentVotes = $2
	  where presidentName = $1;
      return 'OK';
  end;
$$
  language 'plpgsql';

 -- function to add presidents 
   select set_president('President Candidate 1', 0);
   select set_president('President Candidate 2', 0);
   select set_president('President Candidate 3', 0);
   select set_president('President Candidate 4', 0);
   
 --end of President Table
 
 --start of Vice President table
create table vicepresident (
	vicepresidentID serial primary key,
	vicepresidentName text,
	vicepresidentVotes int
);

create or replace
    function set_vicepresident(p_vicepresidentName text, p_vicepresidentVotes int) 
    returns text as
$$
    begin
      insert into vicepresident(vicepresidentName, vicepresidentVotes) values
        (p_vicepresidentName, p_vicepresidentVotes);
    return 'OK';
    end;
$$
  language  'plpgsql';

create or replace 
    function set_vicepresidentvote(p_vicepresidentName text, p_vicepresidentVotes int)
    returns text as
$$
  begin
      update vicepresident
	  set vicepresidentVotes = $2
	  where vicepresidentName = $1;
      return 'OK';
  end;
$$
  language 'plpgsql';

-- function to add vice presidents
   select set_vicepresident('Vice President Candidate 1', 0);
   select set_vicepresident('Vice President Candidate 2', 0);
   select set_vicepresident('Vice President Candidate 3', 0);
   select set_vicepresident('Vice President Candidate 4', 0);
   
--end of Vice President Table
 
--start of Senator table
create table senator (
	senatorID serial primary key,
	senatorName text,
	senatorVotes int
);

create or replace
    function set_senator(p_senatorName text, p_senatorVotes int) 
    returns text as
$$
    begin
      insert into senator(senatorName, senatorVotes) values
        (p_senatorName, p_senatorVotes);
    return 'OK';
    end;
$$
  language  'plpgsql';

create or replace 
    function set_senatorvotes(p_senatorName1 text, p_senatorVotes1 int, p_senatorName2 text, p_senatorVotes2 int, p_senatorName3 text, p_senatorVotes3 int, p_senatorName4 text, p_senatorVotes4 int)
    returns text as
$$
  begin
      update senator
	  set senatorVotes = $2
	  where senatorName = $1;
	  update senator
	  set senatorVotes = $4
	  where senatorName = $3;
	  update senator
	  set senatorVotes = $6
	  where senatorName = $5;
	  update senator
	  set senatorVotes = $8
	  where senatorName = $7;
      return 'OK';
  end;
$$
  language 'plpgsql';

-- function to add senators
   select set_senator('Senator Candidate 1', 0);
   select set_senator('Senator Candidate 2', 0);
   select set_senator('Senator Candidate 3', 0);
   select set_senator('Senator Candidate 4', 0);
   select set_senator('Senator Candidate 5', 0);
   select set_senator('Senator Candidate 6', 0);
   select set_senator('Senator Candidate 7', 0);
   select set_senator('Senator Candidate 8', 0);
   
 --end of Senator Table
 
 --start of voters table
 create table voters (     
	votersid serial NOT NULL primary key,
	votersName text
);

create or replace 
	function set_voter(p_votersName text)
    returns text as
$$
    begin
      insert into voters(votersName) values
        (p_votersName);
    return 'OK';
    end;
$$
  language  'plpgsql';
