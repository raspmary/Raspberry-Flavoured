#version 150

#moj_import <fog.glsl>

uniform sampler2D Sampler0;

uniform vec4 ColorModulator;

in vec2 texCoord0;
in float vertexDistance;
in vec4 vertexColor;
in vec4 normal;

out vec4 fragColor;

void main() {
	float fogStart = 200.0;
	float fogEnd = 300.0;
	float fogValue = 0.0;
    vec4 color = texture(Sampler0, texCoord0) * vertexColor * ColorModulator;
    if (color.a < 0.1) {
        discard;
    }
	if (vertexDistance > fogStart) { fogValue = vertexDistance < fogEnd ? smoothstep(fogStart, fogEnd, vertexDistance) : 1.0; }
    fragColor = color * vec4(1.0, 1.0, 1.0, 1.0 - fogValue) * vec4(1.0, 1.0, 1.0, 0.75);
}