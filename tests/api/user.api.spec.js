import {test,expect,request} from '@playwright/test'

test ( 'GET USER', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.get('https://softapi.nigsoft.com/api/auth/staff');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toMatchObject({
        id: 26, 
        lab_id:3,
        name: 'Demo_Admin',
        username: 'Demo_Admin',
        email: 'test@nigsoft.com'
    });
});