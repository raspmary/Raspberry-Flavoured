#version 150

#moj_import <fog.glsl>

uniform sampler2D Sampler0;

uniform vec4 ColorModulator;
uniform float FogStart;
uniform float FogEnd;
uniform vec4 FogColor;

in float vertexDistance;
in vec4 vertexColor;
in vec4 vertexLight;
in vec2 texCoord0;
in vec4 normal;

out vec4 fragColor;

void main() {
    vec4 color = texture(Sampler0, texCoord0);
	if (color.a < 0.1) {
        discard;
    }
	
	float alpha = (color.a - 0.1) / 0.9;
	
	color *= min(vertexColor/alpha,1.0) * ColorModulator;
    color *= vertexLight * alpha + (-alpha + 1);
	
    fragColor = linear_fog(color, vertexDistance, FogStart, FogEnd, FogColor);
}
