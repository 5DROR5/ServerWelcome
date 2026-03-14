-- =============================================================================
-- Server Welcome — GE Extension
-- License: The Unlicense (public domain)
-- =============================================================================

local M = {}

local layoutApplied = false
local delayTimer    = 0
local delayActive   = false

local function applyLayout()
    local inMP = MPCoreNetwork and type(MPCoreNetwork.isMPSession) == "function" and MPCoreNetwork.isMPSession()
    if inMP and core_gamestate and core_gamestate.setGameState then
        pcall(function()
            core_gamestate.setGameState('multiplayer', 'Welcome', 'multiplayer')
        end)
        layoutApplied = true
    end
end

M.onInit = function()
    setExtensionUnloadMode(M, "manual")
end

M.onWorldReadyState = function(newState)
    if newState == 2 then
        delayActive = true
        delayTimer  = 0
    end
end

M.onUpdate = function(dt)
    if not delayActive or layoutApplied then return end
    delayTimer = delayTimer + dt
    if delayTimer >= 0.5 then
        applyLayout()
    end
end

return M
