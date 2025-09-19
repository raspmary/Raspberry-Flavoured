#version 150

vec4 projection_from_position(vec4 position) {
    vec4 projection = position * 0.5;
    projection.xy = vec2(projection.x + projection.w, projection.y + projection.w);
    projection.zw = position.zw;
    return projection;
}

vec4 exact_projection_from_position(vec4 position, vec2 screenSize) {
    vec4 projection = position * 0.5;
	float screen = screenSize.x / screenSize.y;
    projection.xy = vec2((projection.x + projection.w) * screen, projection.y + projection.w);
    projection.zw = vec2(position.z * screen, position.w);
    return projection;
}
