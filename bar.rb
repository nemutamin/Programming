if a.nil?
  a=1
end

class C
  attr_reader :haveRescue
  def play_turn
    if @haveRescue.nil?
      @haveRescue = false
    end
  end
end

c = C.new
c.play_turn
puts c.haveRescue
