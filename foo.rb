class A 
  def initialize(v) @v = v end

  def ==(x) x.instance_of?(A) and @v == x.v end
  attr_reader :v
end

x1 = A.new(1)
x2 = A.new(2)


puts x1.instance_of?(A)
puts x1 == x2
