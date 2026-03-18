class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "..."

    def describe(self):
        return f"{self.name} is {self.age} years old and has {self.color} fur."

    def __str__(self):
        return f"{self.__class__.__name__}(name={self.name}, age={self.age}, color={self.color})"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return "Woof!"

    def fetch(self):
        return f"{self.name} fetches the ball!"

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, color={self.color}, breed={self.breed})"


class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self):
        return "Meow!"

    def purr(self):
        return f"{self.name} is purring..."

    def __str__(self):
        kind = "indoor" if self.indoor else "outdoor"
        return f"Cat(name={self.name}, age={self.age}, color={self.color}, type={kind})"


class Parrot(Animal):
    def __init__(self, name, age, color, phrase):
        super().__init__(name, age, color)
        self.phrase = phrase

    def speak(self):
        return f"{self.phrase}!"

    def mimic(self, word):
        return f"{self.name} says: {word}"

    def __str__(self):
        return f"Parrot(name={self.name}, age={self.age}, color={self.color}, phrase={self.phrase})"
