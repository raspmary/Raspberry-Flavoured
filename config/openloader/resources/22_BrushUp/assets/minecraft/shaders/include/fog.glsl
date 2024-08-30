#version 150

vec4 linear_fog(vec4 inColor, float vertexDistance, float fogStart, float fogEnd, vec4 fogColor) {
	float start = fogStart * 0.8;
	float end = fogEnd * 1.0;

    if (vertexDistance <= start) {
        return inColor;
    }

    float fogValue = vertexDistance < end ? smoothstep(start, end, vertexDistance) : 1.0;
    return vec4(mix(inColor.rgb, fogColor.rgb, fogValue * fogColor.a), inColor.a);
}

float linear_fog_fade(float vertexDistance, float fogStart, float fogEnd) {
    if (vertexDistance <= fogStart) {
        return 1.0;
    } else if (vertexDistance >= fogEnd) {
        return 0.0;
    }

    return smoothstep(fogEnd, fogStart, vertexDistance);
}

float fog_distance(mat4 modelViewMat, vec3 pos, int shape) {
	return length((modelViewMat * vec4(pos, 1.0)).xyz);
}
