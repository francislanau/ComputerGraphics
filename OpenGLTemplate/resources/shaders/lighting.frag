#version 400 core

out vec4 colour;

in vec3 FragPos;
in vec3 Normal;

uniform vec3 objectColour;
uniform vec3 lightColour;
uniform vec3 lightPos;
uniform vec3 viewPos;

void main(){
	//ambient 
	float ambientStrength = 0.1f;
	vec3 ambient = ambiantStrength * lightColour;

	//diffuse
	vec3 norm = normalize(Normal);
	vec3 lightDir = normalize(lightPos - FragPos);
	float diff = max(dot(norm, lightDir),0.0);
	vec3 diffuse = diff * lightColour;

	//specular
	float specularStrength = 0.5;
	vec3 viewDir = normalize(viewPos - FragPos);
	vec3 reflectDir = reflect (-lightDir, norm);
	floar spec = pow(max(dor(viewDir, reflectDir),0.0),32);
	vec3 specular = specularStrength * spec * lightColour;
	vec3 result = (ambient + diffuse + specular) * objectColour;
	colour = vec4(result, 1.0f);

}