class Player
  def play_turn(warrior)
    # cool code goes here
    if @health.nil?
      @health = 20
    end
    if @haveRescued.nil?
      @haveRescued = false
    end

    if !@haveRescued
      if warrior.feel(:backward).empty?
        warrior.walk! :backward
      elsif warrior.feel(:backward).captive?
        warrior.rescue! :backward
        @haveRescued = true
      end
    else
      if warrior.health > 10 || warrior.feel.enemy?
        go_attack(warrior)
      elsif warrior.feel(:backward).wall?
        warrior.rest!
      else
        warrior.walk! :backward
      end
    end

    def go_attack(warrior)
      if @health > warrior.health
        # damaged
        if warrior.feel.empty?
          warrior.walk!
        elsif warrior.feel.enemy?
          warrior.attack!
        end
      elsif warrior.feel.enemy?
        warrior.attack!
      else
        if warrior.health < 15
          warrior.rest!
        elsif warrior.feel.empty?
          warrior.walk!
        end
      end
    end

    @health = warrior.health
  end
end
