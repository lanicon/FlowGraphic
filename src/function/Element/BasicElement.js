// 构造各种形状元素
import React from 'react';
import SelectBox from "./SelectedBox";

class Circle {
    constructor({cx, cy, r,
                    stroke, strokeWidth, strokeOpacity,
                    fill, fillOpacity}, onclick) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.strokeOpacity = strokeOpacity;
        this.fill = fill;
        this.fillOpacity = fillOpacity;
        this.shape = "Circle";
        this.allAnimate = [];
        this.previewAnimate = [];
        this.onclick = onclick;
    }

    onClick = e => {
        this.onclick(this);
        e.stopPropagation();
    };

    draw(cx, cy, r) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }

    addAnimate(animate) {
        this.allAnimate = this.allAnimate.concat(animate)
    }

    result() {
        return (<circle cx={this.cx} cy={this.cy} r={this.r}
                       stroke={this.stroke} strokeWidth={this.strokeWidth} strokeOpacity={this.strokeOpacity}
                       fill={this.fill} fillOpacity={this.fillOpacity}>
            { this.allAnimate.map(animate => animate.result()) }
            </circle>)
    };


    editor() {
        return (<circle cx={this.cx * 0.5} cy={this.cy * 0.5} r={this.r * 0.5}
                        stroke={this.stroke} strokeWidth={this.strokeWidth * 0.5} strokeOpacity={this.strokeOpacity}
                        fill={this.fill} fillOpacity={this.fillOpacity}
                        onDoubleClick={this.onClick}>
            {this.previewAnimate.map(animate => animate.editor())}
        </circle>)
    };


    list() {
        return (<circle cx={this.cx * 0.12} cy={this.cy * 0.12} r={this.r * 0.12}
                       stroke={this.stroke} strokeWidth={this.strokeWidth * 0.12} strokeOpacity={this.strokeOpacity}
                       fill={this.fill} fillOpacity={this.fillOpacity}/>)
    };

    cover() {
        return (<circle cx={this.cx * 0.12} cy={this.cy * 0.12} r={this.r * 0.12}
                       stroke={this.stroke} strokeWidth={this.strokeWidth * 0.12} strokeOpacity={this.strokeOpacity}
                       fill={this.fill} fillOpacity={this.fillOpacity}>
            { this.allAnimate.map(animate => animate.result()) }
        </circle>)
    };


    selected() {
        return (<g>
                {this.editor()}
                <SelectBox x={(this.cx - this.r) * 0.5} y={(this.cy - this.r) * 0.5}
                           width={this.r} height={this.r}/>
            </g>
        )
    };
}



class Rect {
    constructor({x, y, width, height,
                    stroke, strokeWidth, strokeOpacity,
                    fill, fillOpacity}, onclick) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.strokeOpacity = strokeOpacity;
        this.fill = fill;
        this.fillOpacity = fillOpacity;
        this.shape = "Rect";
        this.allAnimate = [];
        this.previewAnimate = [];
        this.onclick = onclick;
    }

    onClick = e => {
        this.onclick(this);
        e.stopPropagation();
    };

    draw(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    addAnimate(animate) {
        this.allAnimate = this.allAnimate.push(animate)
    }

    result() {
        return (<rect x={this.x} y={this.y} width={this.width} height={this.height}
                     stroke={this.stroke} strokeWidth={this.strokeWidth} strokeOpacity={this.strokeOpacity}
                     fill={this.fill} fillOpacity={this.fillOpacity}>
            { this.allAnimate.map(animate => animate.result()) }
            </rect>)
    }
    
    editor() {
        return (<rect x={this.x * 0.5} y={this.y * 0.5} width={this.width * 0.5} height={this.height * 0.5}
                     stroke={this.stroke} strokeWidth={this.strokeWidth * 0.5} strokeOpacity={this.strokeOpacity}
                     fill={this.fill} fillOpacity={this.fillOpacity}
                     onDoubleClick={this.onClick}>
            { this.previewAnimate.map(animate => animate.editor()) }
            </rect>)
    }
    
    list() {
        return (<rect x={this.x * 0.12} y={this.y * 0.12} width={this.width * 0.12} height={this.height * 0.12}
                     stroke={this.stroke} strokeWidth={this.strokeWidth * 0.12} strokeOpacity={this.strokeOpacity}
                     fill={this.fill} fillOpacity={this.fillOpacity}/>)
    }

    cover() {
        return (<rect x={this.x * 0.12} y={this.y * 0.12} width={this.width * 0.12} height={this.height * 0.12}
                     stroke={this.stroke} strokeWidth={this.strokeWidth * 0.12} strokeOpacity={this.strokeOpacity}
                     fill={this.fill} fillOpacity={this.fillOpacity}>
            { this.allAnimate.map(animate => animate.result()) }
        </rect>)
    }

    selected() {
        return (<g>
                {this.editor()}
                <SelectBox x={this.x * 0.5} y={this.y * 0.5}
                           width={this.width * 0.5} height={this.height * 0.5}/>
            </g>
        )
    }
}

class Ellipse {
    constructor({cx, cy, rx, ry,
                    stroke, strokeWidth, strokeOpacity,
                    fill, fillOpacity}, onclick) {
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = ry;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.strokeOpacity = strokeOpacity;
        this.fill = fill;
        this.fillOpacity = fillOpacity;
        this.shape = "Ellipse";
        this.allAnimate = [];
        this.previewAnimate = [];
        this.onclick = onclick;
    }

    onClick = e => {
        this.onclick(this);
        e.stopPropagation();
    };

    draw(cx, cy, rx, ry) {
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = ry;
    }

    addAnimate(animate) {
        this.allAnimate = this.allAnimate.push(animate)
    }

    result() {
        return <ellipse cx={this.cx} cy={this.cy} rx={this.rx} ry={this.ry}
                     stroke={this.stroke} strokeWidth={this.strokeWidth} strokeOpacity={this.strokeOpacity}
                     fill={this.fill} fillOpacity={this.fillOpacity}>
            { this.allAnimate.map(animate => animate.result()) }
            </ellipse>
    }

    editor() {
        return <ellipse cx={this.cx * 0.5} cy={this.cy * 0.5} rx={this.rx * 0.5} ry={this.ry * 0.5}
                     stroke={this.stroke} strokeWidth={this.strokeWidth * 0.5} strokeOpacity={this.strokeOpacity}
                     fill={this.fill} fillOpacity={this.fillOpacity}
                     onClick={this.onClick}>
            { this.previewAnimate.map(animate => animate.editor()) }
            </ellipse>
    }

    list() {
        return <ellipse cx={this.cx * 0.12} cy={this.cy * 0.12} rx={this.rx * 0.12} ry={this.ry * 0.12}
                     stroke={this.stroke} strokeWidth={this.strokeWidth * 0.12} strokeOpacity={this.strokeOpacity}
                     fill={this.fill} fillOpacity={this.fillOpacity}/>
    }

    cover() {
        return <ellipse cx={this.cx * 0.12} cy={this.cy * 0.12} rx={this.rx * 0.12} ry={this.ry * 0.12}
                        stroke={this.stroke} strokeWidth={this.strokeWidth * 0.12} strokeOpacity={this.strokeOpacity}
                        fill={this.fill} fillOpacity={this.fillOpacity}>
            { this.allAnimate.map(animate => animate.result()) }
        </ellipse>
    }

    selected() {
        return (
            <g>
                {this.editor()}
                <SelectBox x={(this.cx - this.rx) * 0.5} y={(this.cy - this.ry) * 0.5}
                           width={this.rx} height={this.ry}/>
            </g>
        )
    }
}

class Line {
    constructor({x1, y1, x2, y2, stroke, strokeWidth, strokeOpacity}, onclick) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.strokeOpacity = strokeOpacity;
        this.shape = "Line";
        this.allAnimate = [];
        this.previewAnimate = [];
        this.onclick = onclick;
    }

    onClick = e => {
        this.onclick(this);
        e.stopPropagation();
    };

    draw(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.stroke = "black"
    }

    addAnimate(animate) {
        this.allAnimate = this.allAnimate.push(animate)
    }

    result() {
        return <line x1={this.x1} y1={this.y1} x2={this.x2} y2={this.y2}
                     stroke={this.stroke} strokeWidth={this.strokeWidth} strokeOpacity={this.strokeOpacity}>
            { this.allAnimate.map(animate => animate.result()) }
            </line>
    }

    editor() {
        return <line x1={this.x1 * 0.5} y1={this.y1 * 0.5} x2={this.x2 * 0.5} y2={this.y2 * 0.5}
                     stroke={this.stroke} strokeWidth={this.strokeWidth * 0.5} strokeOpacity={this.strokeOpacity}
                     onDoubleClick={this.onClick}>
            { this.previewAnimate.map(animate => animate.editor()) }
            </line>
    }

    list() {
        return <line x1={this.x1 * 0.12} y1={this.y1 * 0.12} x2={this.x2 * 0.12} y2={this.y2 * 0.12}
                     stroke={this.stroke} strokeWidth={this.strokeWidth * 0.12} strokeOpacity={this.strokeOpacity}/>
    }

    cover() {
        return <line x1={this.x1 * 0.12} y1={this.y1 * 0.12} x2={this.x2 * 0.12} y2={this.y2 * 0.12}
                     stroke={this.stroke} strokeWidth={this.strokeWidth * 0.12} strokeOpacity={this.strokeOpacity}>
            { this.allAnimate.map(animate => animate.result()) }
        </line>
    }

    selected() {
        return (
            <g>
                {this.editor()}
                <SelectBox x={Math.min(this.x1, this.x2) * 0.5} y={Math.min(this.y1, this.y2) * 0.5}
                           width={Math.abs(this.x1 - this.x2) * 0.5} height={Math.abs(this.y1 - this.y2) * 0.5}/>
            </g>
        )
    }
}

class Text {
    constructor({x, y,
                fontSize, content,
                fill, fillOpacity,
                transform,
                stroke, strokeWidth, strokeOpacity}, onclick) {
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.content = content;
        this.fill = fill;
        this.fillOpacity = fillOpacity;
        this.transform = transform;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.strokeOpacity = strokeOpacity;
        this.shape = "Text";
        this.allAnimate = [];
        this.previewAnimate = [];
        this.onclick = onclick;
    }

    onClick = e => {
        this.onclick(this);
        e.stopPropagation();
    };

    draw(x, y) {
        this.x = x;
        this.y = y;
    }

    addAnimate(animate) {
        this.allAnimate = this.allAnimate.push(animate)
    }

    result() {
        return <text x={this.x} y={this.y}
                     fontSize={this.fontSize}
                     fill={this.fill} fillOpacity={this.fillOpacity}
                     stroke={this.stroke} strokeWidth={this.strokeWidth} strokeOpacity={this.strokeOpacity}>
            { this.content }
            { this.allAnimate.map(animate => animate.result()) }
            </text>
    }

    editor() {
        return <text x={this.x * 0.5} y={this.y * 0.5}
                     fontSize={this.fontSize * 0.5}
                     fill={this.fill} fillOpacity={this.fillOpacity}
                     stroke={this.stroke} strokeWidth={this.strokeWidth * 0.5} strokeOpacity={this.strokeOpacity}
                     onDoubleClick={this.onClick}>
            { this.content }
            { this.previewAnimate.map(animate => animate.editor()) }
            </text>
    }

    list() {
        return <text x={this.x * 0.12} y={this.y * 0.12}
                     fontSize={this.fontSize * 0.12}
                     fill={this.fill} fillOpacity={this.fillOpacity}
                     stroke={this.stroke} strokeWidth={this.strokeWidth * 0.12} strokeOpacity={this.strokeOpacity}>
            { this.content }
            </text>
    }

    cover() {
        return <text x={this.x * 0.12} y={this.y * 0.12}
                     fontSize={this.fontSize * 0.12}
                     fill={this.fill} fillOpacity={this.fillOpacity}
                     stroke={this.stroke} strokeWidth={this.strokeWidth * 0.12} strokeOpacity={this.strokeOpacity}>
            { this.content }
            { this.allAnimate.map(animate => animate.result()) }
        </text>
    }

    selected() {
        return (
            <g>
                {this.editor()}
                <SelectBox x={this.x * 0.5} y={this.y * 0.5}
                           width={50} height={0}/>
            </g>
        )
    }
}

export { Circle, Rect, Ellipse, Line, Text };