#!/usr/bin/env python3
"""
Main application module - Simple utility functions demo
"""

def greet(name: str) -> str:
    """
    Greet a user by name.
    
    Args:
        name: The user's name
    
    Returns:
        A greeting message
    """
    return f"Hello, {name}! Welcome to the demo project."


def add(a: int, b: int) -> int:
    """
    Add two numbers.
    
    Args:
        a: First number
        b: Second number
    
    Returns:
        The sum of a and b
    """
    return a + b


def multiply(a: int, b: int) -> int:
    """
    Multiply two numbers.
    
    Args:
        a: First number
        b: Second number
    
    Returns:
        The product of a and b
    """
    return a * b


def calculate_factorial(n: int) -> int:
    """
    Calculate factorial of a number.
    
    Args:
        n: The number
    
    Returns:
        The factorial of n
    
    Raises:
        ValueError: If n is negative
    """
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    if n == 0 or n == 1:
        return 1
    return n * calculate_factorial(n - 1)


if __name__ == "__main__":
    # Demo usage
    print(greet("Developer"))
    print(f"5 + 3 = {add(5, 3)}")
    print(f"4 * 7 = {multiply(4, 7)}")
    print(f"5! = {calculate_factorial(5)}")
