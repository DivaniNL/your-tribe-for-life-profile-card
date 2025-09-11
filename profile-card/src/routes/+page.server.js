function calculate_age(dob) { 
    // https://www.w3resource.com/javascript-exercises/javascript-date-exercise-18.php
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
export async function load({url}){
    const memberReponse = await fetch('https://fdnd.directus.app/items/person/150?fields=*,mugshot.*')
    const memberReponseData = await memberReponse.json()
    let age = calculate_age(new Date(memberReponseData.data.birthdate));
    let member = memberReponseData.data;
    return {
        member: {
            ...member,
            age: age
        }
    };
}