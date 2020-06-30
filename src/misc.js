import _ from 'underscore';
import Two from 'two.js';
// Moves the text to middle of the newly sized page
export function resize(svg, two) {
    svg.translation.set(two.width / 2, two.height / 2);
}

export function calculateDistances(group) {
    // For each path
    return _.map(group.children, function(child) {
        var d = 0, a;
        // For each vertice find the distance between them
        _.each(child.vertices, function(b, i) {
            // Skip the first vertice
            if (i > 0) {
                d += a.distanceTo(b);
            }
            a = b;
            });
        return d;
    });
}

// If value is above max set it to the max value 
// If value is above the min set it to minimum value
// Else set to it the value
export function clamp(v, min, max) {
    return Math.max(Math.min(v, max), min);
}

// Normalize values to 1
// (value-min) / (max-min)
export function map(v, i1, i2, o1, o2) {
    return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}

// Normalizes each value then clamp it 
export function cmap(v, i1, i2, o1, o2) {
    return clamp(map(v, i1, i2, o1, o2), o1, o2);
}

export function setEnding(group, t) {
    // Current iteration
    var i = 0;
    // t is a percentage, group.total is total distance 
    var traversed = t * group.total;
    var current = 0;
    //console.log(group.children)
    // For each path in group
    _.each(group.children, function(child) {
      var distance = group.distances[i];
      // Minimum distance
      var min = current;
      // Maximum distance
      var max = current + distance;
      // End point
      var pct = cmap(traversed, min, max, 0, 1);
      // Set endpoint
      child.ending = pct;
      // Set new current to max
      current = max;
      i++;
    });
}

export function makeGradient(rect, colors, two){
    colors.index = 0;
    var linearGradient = two.makeLinearGradient(
        two.width / 2, - two.height / 2,
        two.width / 2, two.height / 2,
        new Two.Stop(0, colors[0]),
        new Two.Stop(0.5, colors[1]),
        new Two.Stop(1, colors[2])
    );

    rect.fill = linearGradient;
    return rect;
}


/*
export function clearT(svg, t) {
    t = 0;
    setEnding(svg, 0);
    let startOver = _.after(60, clearT);
    return startOver, t
};*/