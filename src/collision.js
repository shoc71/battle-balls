export function resolveBallCollision(a, b) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const distance = Math.hypot(dx, dy);

    if (distance < a.radius + b.radius) {
        // simple elastic collision
        [a.vx, b.vx] = [b.vx, a.vx];
        [a.vy, b.vy] = [b.vy, a.vy];

        a.takeDamage(1);
        b.takeDamage(1);
    }
}
