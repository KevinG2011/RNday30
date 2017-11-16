'use strict';

import React, { Component } from 'react';
import GL from 'gl-react';

const shaders = GL.Shaders.create({
  helloGL: {
    frag: `
      precision highp float;
      varying vec2 uv;
      uniform float value;
      void main () {
        gl_FragColor = vec4(uv.x, uv.y, value, 1.0);
      }
    `
  },
  saturation: {
    frag: `
      precision highp float;
      varying vec2 uv;
      uniform sampler2D image;
      uniform float factor;
      void main () {
        vec4 c = texture2D(image, uv);
        const vec3 W = vec3(0.2125, 0.7154, 0.0721);
        gl_FragColor = vec4(mix(vec3(dot(c.rgb, W)), c.rgb, factor), c.a);
      }
    `
  },
  pieProgress: {
    frag: `
      precision mediump float;
      varying vec2 uv;
      uniform vec4 colorInside, colorOutside;
      uniform float radius;
      uniform float progress;
      uniform vec2 dim;
      const vec2 center = vec2(0.5);
      const float PI = acos(-1.0);
      void main () {
        vec2 norm = dim / min(dim.x, dim.y);
        vec2 p = uv * norm - (norm-1.0)/2.0;
        vec2 delta = p - center;
        float inside =
          step(length(delta), radius) *
          step((PI + atan(delta.y, - 1.0 * delta.x)) / (2.0 * PI), progress);
        gl_FragColor = mix(
          colorOutside,
          colorInside,
          inside
        );
      }
    `
  }
});

const helloRenderNode = ({ value }) => {
	return (
		<GL.Node
			shader={shaders.helloGL}
			uniforms={{ value }}
		/>
	);
};
const helloFields = {
	displayName: 'HelloGL',
};

const HelloGL = GL.createComponent(helloRenderNode, helloFields);

const saturationRenderNode = ({ factor, image, ...rest }) => {
	return (
		<GL.Node
			shader={shaders.saturation}
			uniforms={{ factor, image }}
		/>
	);
};
const saturationFields = {
	displayName: 'Saturation',
};
const SaturationGL = GL.createComponent(saturationRenderNode, saturationFields);

const pieProgressRenderNode = ({ width, height, progress, colorInside, colorOutside, radius }) => {
	return (
		<GL.Node
			shader={shaders.pieProgress}
			uniforms={{ dim: [width, height], progress, colorInside, colorOutside, radius }}
		/>
	);
};
const pieProgressFields = {
	displayName: 'PieProgress',
	defaultProps: {
		colorInside: [0, 0, 0, 0],
		colorOutside: [0, 0, 0, 0.8],
		radius: 0.4,
	},
};
const PieProgressGL = GL.createComponent(pieProgressRenderNode, pieProgressFields);

export { HelloGL, SaturationGL, PieProgressGL };

