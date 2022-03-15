function update(){
    //Movement Controls
    if(controls.enabled){
        controls.target.copy(player.position);

        if(keysPressed[KEY_SHIFT]){
            //Left and Right Rotation
            if(keysPressed[KEY_LEFT]){
                player.rotation.y += playerSettings.turnSpeed;
            }
    
            if(keysPressed[KEY_RIGHT]){
                player.rotation.y -= playerSettings.turnSpeed;
            }
            
            //W and S Movement
            if(keysPressed[KEY_W] || keysPressed[KEY_UP]){
                player.position.x -= Math.sin(player.rotation.y) * playerSettings.sprintSpeed;
                player.position.y -= -Math.cos(player.rotation.y) * playerSettings.sprintSpeed;
    
                camera.position.x -= Math.sin(player.rotation.y) * playerSettings.sprintSpeed;
                camera.position.y -= -Math.cos(player.rotation.y) * playerSettings.sprintSpeed;
            }
    
            if(keysPressed[KEY_S] || keysPressed[KEY_DOWN]){
                player.position.x += Math.sin(player.rotation.y) * playerSettings.sprintSpeed;
                player.position.y += -Math.cos(player.rotation.y) * playerSettings.sprintSpeed;
    
                camera.position.x += Math.sin(player.rotation.y) * playerSettings.sprintSpeed;
                camera.position.y += -Math.cos(player.rotation.y) * playerSettings.sprintSpeed;
            }
        } else {
            //Left and Right Rotation
            if(keysPressed[KEY_LEFT]){
                player.rotation.y += playerSettings.turnSpeed;
            }
    
            if(keysPressed[KEY_RIGHT]){
                player.rotation.y -= playerSettings.turnSpeed;
            }
            
            //W and S Movement
            if(keysPressed[KEY_W] || keysPressed[KEY_UP]){
                player.position.x -= Math.sin(player.rotation.y) * playerSettings.speed;
                player.position.y -= -Math.cos(player.rotation.y) * playerSettings.speed;
    
                camera.position.x -= Math.sin(player.rotation.y) * playerSettings.speed;
                camera.position.y -= -Math.cos(player.rotation.y) * playerSettings.speed;
            }
    
            if(keysPressed[KEY_S] || keysPressed[KEY_DOWN]){
                player.position.x += Math.sin(player.rotation.y) * playerSettings.speed;
                player.position.y += -Math.cos(player.rotation.y) * playerSettings.speed;
    
                camera.position.x += Math.sin(player.rotation.y) * playerSettings.speed;
                camera.position.y += -Math.cos(player.rotation.y) * playerSettings.speed;
            }
        }
    }
}
