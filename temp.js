const { createClient } = require('@supabase/supabase-js')
const { Pool } = require('pg');
// Create a single supabase client for interacting with your database
const supabase = createClient('http://192.168.3.38:8000', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE')

const supabase_admin = createClient('http://192.168.3.57:8000', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJzZXJ2aWNlX3JvbGUiLAogICAgImlzcyI6ICJzdXBhYmFzZS1kZW1vIiwKICAgICJpYXQiOiAxNjQxNzY5MjAwLAogICAgImV4cCI6IDE3OTk1MzU2MDAKfQ.DaYlNEoUrrEn2Ig7tqibS-PHK5vgusbcbo7X36XVt4Q')

    // http://192.168.3.57:8000
    // /auth/v1/callback?
    // state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDQ0MjI0MTMsInNpdGVfdXJsIjoiaHR0cDovLzE5Mi4xNjguMy4zNi9kb2Mtd2ViLyMvYXV0aCIsImlkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwIiwiZnVuY3Rpb25faG9va3MiOm51bGwsInByb3ZpZGVyIjoia3VzaGltIiwicmVmZXJyZXIiOiJodHRwOi8vMTkyLjE2OC4zLjM2LyIsImZsb3dfc3RhdGVfaWQiOiIifQ.UDcPiO9dFwWE5XnmkRaO19caAlGxwLD3KVUuTwrECCI
    // &code=fd869fa2-b6dc-4e68-97d3-ceb8590541f0

    // http://localhost:12345/doc-web/#/auth
    // #access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA0NDI2MDA0LCJpYXQiOjE3MDQ0MjI0MDQsInN1YiI6Ijg4OTIwNjczLTgwZWYtNGY1My04OGJlLTA4ZWJmOWJhZGMzOSIsImVtYWlsIjoiaGVsbG8xQHFxLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im90cCIsInRpbWVzdGFtcCI6MTcwNDQyMjQwNH1dLCJzZXNzaW9uX2lkIjoiNzhlNDVjMWMtNTFlMi00OGY2LWE1MDQtNGE3N2FlNTNiNDM2In0.VSckOe5d9gzepqqQV04SThjlscpTQrJgQt-xB-ZVbmc
    // &expires_at=1704426004
    // &expires_in=3600
    // &refresh_token=NA8jiT9Vjhjp9Gx_xOx1IQ
    // &token_type=bearer
    // &type=magiclink

async function admin() {
    let res =await supabase_admin.auth.admin.generateLink({
        email: 'hello11@qq.com',
        type: 'magiclink',
        
        redirectTo: 'http://192.168.3.38:8000/xxx/1234',
        options: {
            redirectTo: 'http://192.168.3.38:8000/xxx/1233',
        }
    });

    
    console.log(res);
}


async function getUserByemail() {
    let res =await supabase_admin.auth.admin.listUsers();
    console.log(res);
}

 //define main function
 async function main() {
    let res = await supabase.auth.signInWithPassword({
        email: 'hello1@qq.com',
        password:'123456888'
    });
    
    console.log(res);
    //get token and refresh_token
    let session =await supabase.auth.getSession();
    console.log(session);
    const token = (session).data.session.access_token;
    const refresh_token = (session).data.session.refresh_token;
    console.log(token);
    console.log(refresh_token);
}

// main();
admin();



