function updateControls(){
    //Movement Controls
    if(controls.enabled){
        controls.target.copy(player.position);

        if(keysPressed[KEY_SHIFT]){
            //Left and Right Rotation
            if(keysPressed[KEY_LEFT]){
                player.rotation.z += playerSettings.turnSpeed;
            }
    
            if(keysPressed[KEY_RIGHT]){
                player.rotation.z -= playerSettings.turnSpeed;
            }
            
            //W and S Movement
            if(keysPressed[KEY_W] || keysPressed[KEY_UP]){
                player.position.x -= Math.sin(player.rotation.z) * playerSettings.sprintSpeed;
                player.position.y -= -Math.cos(player.rotation.z) * playerSettings.sprintSpeed;
    
                camera.position.x -= Math.sin(player.rotation.z) * playerSettings.sprintSpeed;
                camera.position.y -= -Math.cos(player.rotation.z) * playerSettings.sprintSpeed;
            }
    
            if(keysPressed[KEY_S] || keysPressed[KEY_DOWN]){
                player.position.x += Math.sin(player.rotation.z) * playerSettings.sprintSpeed;
                player.position.y += -Math.cos(player.rotation.z) * playerSettings.sprintSpeed;
    
                camera.position.x += Math.sin(player.rotation.z) * playerSettings.sprintSpeed;
                camera.position.y += -Math.cos(player.rotation.z) * playerSettings.sprintSpeed;
            }
        } else {
            //Left and Right Rotation
            if(keysPressed[KEY_LEFT]){
                player.rotation.z += playerSettings.turnSpeed;
            }
    
            if(keysPressed[KEY_RIGHT]){
                player.rotation.z -= playerSettings.turnSpeed;
            }
            
            //W and S Movement
            if(keysPressed[KEY_W] || keysPressed[KEY_UP]){
                player.position.x -= Math.sin(player.rotation.z) * playerSettings.speed;
                player.position.y -= -Math.cos(player.rotation.z) * playerSettings.speed;
    
                camera.position.x -= Math.sin(player.rotation.z) * playerSettings.speed;
                camera.position.y -= -Math.cos(player.rotation.z) * playerSettings.speed;
            }
    
            if(keysPressed[KEY_S] || keysPressed[KEY_DOWN]){
                player.position.x += Math.sin(player.rotation.z) * playerSettings.speed;
                player.position.y += -Math.cos(player.rotation.z) * playerSettings.speed;
    
                camera.position.x += Math.sin(player.rotation.z) * playerSettings.speed;
                camera.position.y += -Math.cos(player.rotation.z) * playerSettings.speed;
            }
        }
    }
}
