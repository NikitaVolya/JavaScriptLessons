

// Exercice 1
const auto = {
    producer: "Mercedes-Benz",
    model: "C-Class",
    graduationYear: 2021,
    avgSpeed: 100,
    Display() {
        alert(`Auto [${this.model}, ${this.producer} (${this.graduationYear}) | ${this.avgSpeed} km/h]`);
    },
    TimeToReached(kms) {
        let time = kms / this.avgSpeed;
        let stop_n = Math.floor(time / 4);
        return time + stop_n;
    }
}

auto.Display();
console.log(auto.TimeToReached(500));

// Exercice 2
function PGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b != 0)
    {
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function createFraction(numerator, denominator) {
    return {
        numerator: numerator,
        denominator: denominator,
        Add(other) {
            return createFraction(
                this.numerator * other.denominator + other.numerator * this.denominator,
                this.denominator * other.denominator
            );
        },
        Sub(other) {
            return createFraction(
                this.numerator * other.denominator - other.numerator * this.denominator,
                this.denominator * other.denominator
            );
        },
        Prod(other) {
            return createFraction(
                this.numerator * other.numerator,
                this.denominator * other.denominator
            );
        },
        Div(other) {
        return createFraction(
                this.numerator * other.denominator,
                this.denominator * other.numerator
            );
        },
        Reduce() {
            let pgcd = PGCD(this.numerator, this.denominator);
            return createFraction(this.numerator / pgcd, this.denominator / pgcd);
        }
    }
}

const a = createFraction(1, 2);
const b = createFraction(2, 5);
console.log(a.Prod(b).Add(b).Reduce());

// Exercice 3
function createTime(h, m, s) {
    if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59)
        return null;
    return  {
        Hours: h,
        Minutes: m,
        Seconds: s,
        addHours(hours) {
            this.Hours = (this.Hours + hours) % 23
        },
        addMinutes(minutes) {
            this.Minutes += minutes;
            this.addHours(Math.floor(this.Minutes / 60));
            this.Minutes = this.Minutes % 60;
        },
        addSeconds(seconds) {
            this.Seconds += seconds;
            this.addMinutes(Math.floor(this.Seconds / 60));
            this.Seconds = this.Seconds % 60;
        },
        Display() {
            alert(`${(this.Hours < 10 ? "0" : "") + this.Hours}:${(this.Minutes < 10 ? "0" : "") + this.Minutes}:${(this.Seconds < 10 ? "0" : "") + this.Seconds}`);
        }
    }
}

const test_time = createTime(20, 30, 45);
test_time.addSeconds(3000);
test_time.Display();
