#!/usr/bin/env python3
"""
Unit tests for main.py module
"""

import pytest
from main import greet, add, multiply, calculate_factorial


class TestGreeting:
    """Test cases for greeting function"""
    
    def test_greet_with_name(self):
        """Test greeting with a name"""
        result = greet("Alice")
        assert "Alice" in result
        assert "Hello" in result
    
    def test_greet_format(self):
        """Test greeting message format"""
        result = greet("Bob")
        assert result == "Hello, Bob! Welcome to the demo project."


class TestArithmetic:
    """Test cases for arithmetic operations"""
    
    def test_add_positive_numbers(self):
        """Test addition with positive numbers"""
        assert add(2, 3) == 5
        assert add(10, 5) == 15
    
    def test_add_negative_numbers(self):
        """Test addition with negative numbers"""
        assert add(-2, -3) == -5
        assert add(-5, 3) == -2
    
    def test_multiply_numbers(self):
        """Test multiplication"""
        assert multiply(3, 4) == 12
        assert multiply(-2, 5) == -10
        assert multiply(0, 100) == 0


class TestFactorial:
    """Test cases for factorial function"""
    
    def test_factorial_base_cases(self):
        """Test factorial base cases"""
        assert calculate_factorial(0) == 1
        assert calculate_factorial(1) == 1
    
    def test_factorial_positive_numbers(self):
        """Test factorial with positive numbers"""
        assert calculate_factorial(5) == 120
        assert calculate_factorial(4) == 24
    
    def test_factorial_negative_number(self):
        """Test factorial with negative number raises error"""
        with pytest.raises(ValueError):
            calculate_factorial(-1)
